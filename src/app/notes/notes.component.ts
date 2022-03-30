import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

//Buraya bak!!!
  data:'' | undefined
  notetitle:'' | undefined
  notedetail:'' | undefined
  notes:any [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  noteError=''

  fncInsert(){
    const nt={
      notetitle:this.notetitle,
      notedetail:this.notedetail


    }
    const ntItem=JSON.stringify(nt)
    this.fncAddLocal(ntItem)
    this.fncAllDataLocal()
  }
  fncAddLocal(item:string){
    const local=localStorage.getItem("notes")
    if(local){

      const arr=JSON.parse(local);
      arr.push(JSON.parse(item))
      localStorage.setItem("notes", JSON.stringify(arr))
    }else{


      localStorage.setItem("notes", '['+item+']')
    }
   }


  fncAllDataLocal(){
    const nt=localStorage.getItem('notes')
    if(nt){
      this.notes=JSON.parse(nt);
    }
  }
  fncDataRemove(index:number){
    const alert=confirm('Silmek istediğinize emin misiniz?')
    if(alert==true)
    this.notes.splice(index, 1)
    localStorage.setItem('notes',JSON.stringify(this.notes))
  }
  index=-1
  fncDataUpdate(index:number){
    this.index=index
    const item=this.notes[index]
    this.notetitle=item['notetitle']
    this.notedetail=item['notedetail']


  }
  fncUpdate(){
    const item=this.notes[this.index]
    item['notetitle']=this.notetitle
    item['notedetail']=this.notedetail

  }


  fncNotes(event: KeyboardEvent):void{
    const data=(<HTMLInputElement>event.target).value
    this.fncControl(data)

  }
  fncControl(data:String){

    this.noteError=''


  }

}
