import './App.css';
import React from 'react';
import {Inject,ScheduleComponent,Day,Week,Month,Agenda,
TimelineViews,TimelineMonth, DragAndDrop,Resize,ResourcesDirective,ResourceDirective,ViewsDirective,ViewDirective} from '@syncfusion/ej2-react-schedule';

class App extends React.Component{
   data =[
    {
        Id: 1,
        Subject: 'React JS Interview',
        StartTime: new Date(2021, 10, 21, 9, 30),
        EndTime: new Date(2021, 10, 21, 11, 0),
        ResourceID:1

    }, {
        Id: 2,
        Subject: 'College Events ',
        StartTime: new Date(2021, 11, 12, 12, 0),
        EndTime: new Date(2021, 11, 12, 14, 0),
        ResourceID:2

    }, {
        Id: 3,
        Subject: 'Node JS Meeting',
        StartTime: new Date(2021, 10, 24, 9, 30),
        EndTime: new Date(2021, 10, 24, 11, 0),
        ResourceID:3

    }, {
        Id: 4,
        Subject: 'Conference Call',
        StartTime: new Date(2021, 10, 20, 14, 30),
        EndTime: new Date(2021, 10, 20, 14, 0),
        ResourceID:4

    }, {
        Id: 5,
        Subject: 'MongoDB Section',
        StartTime: new Date(2021, 11, 15, 9, 30),
        EndTime: new Date(2021,11, 15, 11, 0),
        ResourceID:5
    }];

    resourceDataSource=[
        {Id:1, Color:'#ea7a57'},
        {Id:2, Color:'Green'},
        {Id:3, Color:'Orange'},
        {Id:4, Color:'#357CD2'},
        {Id:5, Color:'#357CD2'},
    ];   


   render(){
    return (
      
       <ScheduleComponent width="100%" height="550px" currentView="Month" eventSettings={{dataSource:this.data}}>
           <ViewsDirective>
     <ViewDirective option='Day'  > </ViewDirective> 
     <ViewDirective option='Week'  ></ViewDirective>
     <ViewDirective option='Month' ></ViewDirective>
     <ViewDirective option='Agenda' ></ViewDirective>
       </ViewsDirective>  
      <ResourcesDirective>
          <ResourceDirective field='ResourceID'  idField='Id' colorField='Color' imgField='Img'  dataSource={this.resourceDataSource}> 
    </ResourceDirective>
        </ResourcesDirective>
      <Inject services={[Day,Week,Month,Agenda,TimelineViews,TimelineMonth, DragAndDrop,Resize]} />
    </ScheduleComponent>
    
    
    );
  }
  
}

export default App;
