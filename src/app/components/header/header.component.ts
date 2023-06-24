import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';
import {IApplicationConfig} from '../../shared/application-config/application-config.interface';
import {PopupService} from '../../shared/services/popup.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Input() applicationConfig: IApplicationConfig | null = null;

    @Output() menuClickOutput = new EventEmitter<void>();

    constructor(private readonly popupService: PopupService) {}

    openPopup(template: TemplateRef<{$implicit: string}>) {
        this.popupService.openPopup({template, context: {$implicit: 'Test Title'}});
    }

    closePopup() {
        this.popupService.closePopup();
    }
}
