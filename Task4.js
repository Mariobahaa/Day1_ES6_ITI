function Info(options= {courseName, courseDuation,courseOwner}){
    if(arguments[1] )throw new Error("Invalid Input"); 
    
   
    for(var i in arguments[0]) 
        {
            var prop = i.toString();
            //console.log(prop)
            if(prop!="courseDuration" && prop!= "courseOwner" && prop!="courseName") 
               {
                   throw new Error("Invalid Input"); 
               }
        }
    
    
    
    let def = {
        courseName: "ES6",
        courseDuration: 4,
        courseOwner: "Eng Mohammed"
    }
    
    
    let course = Object.assign({},def,options);
    
    console.log(`Course Name: ${course.courseName}\n Duration: ${course.courseDuration}\n Instructor: ${course.courseOwner}`);
}

/*Info({courseName: "React"});
Info({courseDuration: 5});
Info({courseOwner: "Eng. Niveen"});
Info({courseOwner: "Eng. Niveen", courseDuration: 5});
Info({courseName: "React", courseOwner: "Eng. Niveen", courseDuration: 5});*/
Info({});
//Info({courseName: "React", courseOwner: "Eng. Niveen", courseDuration: 5},1);
//Info(1);