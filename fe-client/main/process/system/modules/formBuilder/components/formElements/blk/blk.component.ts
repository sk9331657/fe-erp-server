import * as _ from 'lodash';
import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'blk-input',
  templateUrl: './blk.component.html',
  styleUrls: ['./blk.component.css', '../baseField/baseField.component.css']
})
export class FeBlkComponent extends FeBaseField  implements OnInit, DoCheck {
  showEdit = true;
  properties = {
  label: 'test',
  prefix: '',
  suffix: '',
  description: '',
  placeholder: 'test',
  tooltip: '',
 ...this.properties  
};

  applicableProperties={
    inputMask:true,
    placeholder:true,
    prefix:true,
    suffix:true,
    ...this.applicableProperties

}

  ngOnInit() {

    // this.properties = {
    //   label: 'test',
    //   prefix: '',
    //   suffix: '',
    //   description: '',
    //   placeholder: 'test',
    //   tooltip: ''
    // };
    console.log("initialized a new instance", this.properties);
    this.setRef(this.fieldControlService.getFieldRef().ref);
    this.uniqueKey = this.masterFormService.getCurrentKey();
    console.log(this.uniqueKey);
   // this.masterFormService.setCurrentKey(this.uniqueKey);
    this.masterFormService.setProperties(this.properties);
    // this.applicableProperties={
    //   ...this.textApplicableProperties,
    //   ...this.applicableProperties
    // }

    console.log("base field property is ",this.applicableProperties);

  }

  ngDoCheck() {
  //   const propsFromMasterForm = this.masterFormService.getProperties(this.uniqueKey);
  //  // console.log("master form props", propsFromMasterForm);
  //   if (propsFromMasterForm) {
  //     this.update(propsFromMasterForm);
  // }
}
  onSort(event) {
    console.log('sort success', event);
  }


  openModal() {
    this.masterFormService.setCurrentKey(this.uniqueKey);
    this.masterFormService.setProperties(this.properties);
    this.fieldControlService.getFieldRef().parent.openModal();
  }

  update(propsFromMasterForm) {
    this.properties = _.assignIn({}, propsFromMasterForm);
  }
}
