import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import {MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  projectForm!: FormGroup;
  valueNames = '';
  valueDescription = '';
  projects:Array<Project>=[];

 


  constructor(private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private projectService: ProjectService) { }



  
 

    createProject(project: Project):void{
      this.projectService.createProject(project).subscribe(author=>{
            console.info("The project was created: ", project)
            this.projectService.projectCreated();  
            this.toastr.success("Confirmation", "Project created")
              this.projectForm.reset();
             
      });
      }
      
      
      cancelCreation():void{this.projectForm.reset();}

  ngOnInit():void {
    this.projectForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      descripcion: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    });

      
  }

}
