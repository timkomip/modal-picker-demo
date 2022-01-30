import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { DataService } from '../data.service';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { User } from '../app.modles';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.css'],
})
export class UserSelectorComponent {
  searchControl = new FormControl('');
  results$: Observable<User[]>;
  modalRef: NgbModalRef | null = null;

  @Input() user: User | null = null;
  @Output() userChange = new EventEmitter<User | null>();

  constructor(
    private dataService: DataService,
    private modalService: NgbModal
  ) {
    this.results$ = this.searchControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((text) => this.dataService.getUsersByName(text))
    );
  }

  open(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }

  onItemSelected(user: User) {
    this.userChange.emit(user);
    this.searchControl.setValue("");
    this.modalRef?.close();
  }
}
