import { Directive, ElementRef, HostListener, Input } from "@angular/core";
@Directive({
    selector: '[appDecimal]',
})
export class DecimalDirective {

    @Input() decimalDigits!: number;

    navigationKeys: Array<string> = [
        "delete",
        "backspace",
        "tab",
        "escape",
        "enter",
        ".",
        "arrowleft",
        "arrowright"
    ];

    constructor(private eleRef: ElementRef) { }

    @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
        let key = e.key?.toLowerCase() || ""
        if (
            // Allow: Delete, Backspace, Tab, Escape, Enter, etc
            this.navigationKeys.indexOf(key) > -1 ||
            (key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (key === 'a' && e.metaKey === true) || // Cmd+A (Mac)
            (key === 'c' && e.metaKey === true) || // Cmd+C (Mac)
            (key === 'v' && e.metaKey === true) || // Cmd+V (Mac)
            (key === 'x' && e.metaKey === true) // Cmd+X (Mac)
        ) {
            return;  // let it happen, don't do anything
        }
        // Ensure that it is a number and stop the keypress
        if (e.key === ' ' || isNaN(Number(e.key))) {
            e.preventDefault();
        }
        // Limit to Dynamic Decimal places.
        if (this.eleRef.nativeElement && this.eleRef.nativeElement?.value) {
            let pattern = `^[0-9]+(\\.[0-9]{0,${(this.decimalDigits || 0) - 1}})?$`;
            const regex: RegExp = new RegExp(pattern);
            let value: string = this.eleRef.nativeElement.value;
            if (value && !String(value).match(regex)) {
                e.preventDefault();
            }
        }
    }

    @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
        event.preventDefault();
        if (event?.clipboardData) {
            let pastedInput: string = event.clipboardData
                .getData('text/plain')
                .replace(/[^0-9.]/g, ''); // get a digit-only string
            pastedInput = parseFloat(pastedInput)?.toString();
            if (pastedInput) {
                document.execCommand('insertText', false, pastedInput);
            }
        }
    }
}