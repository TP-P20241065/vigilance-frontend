import { TestBed } from '@angular/core/testing';

import { TemplateService } from './template.service';

describe('TemplateService', () => {
    let service: TemplateService<any>; //observar

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TemplateService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
