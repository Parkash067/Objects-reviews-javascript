/**
 * Created by PK on 6/18/2015.
 */



// Objects are basically those thing which are belong to real world like car,ball,table,
// human etc....

//Properties: Inside objects we defined a properties i.e properties are the characteristics of objects
//Method: It explains the function of object (how it behaves) It is also inside function.


//simple objects !! don't take it wrong i am going to create objects near to reality

/*var actress={
    height:5.6,
    eyecolor:"Black",
    figure:"24,36,24"
}*/
// to access properties of an object simple write objectname.propertyname ," . " is the member access operator.

/*document.write(actress.height+"<br>"+actress.figure+"<br>"+actress.eyecolor);
document.write("<br>");*/

//another way to access the properties of an object. using for in loop

/*for(members in actress)
    {
    document.write("<br>"+members+"==>"+actress[members]);
}
// adding properties in objects.
actress.looks="Sexy and hot";
document.write("<br><br>"+actress.looks );*/

//you can add properties by checking whether it is the propety of object or not, to do this using 'in' operator
/*
var bool=false;
if("height" in actress)
{
    bool=true;
    alert(bool);
}
else{
    alert(bool)
}
*/


/*var bool=true;
if("awards" in actress)
{
    bool=false;
    alert("property already exist");
}

else
{
    actress.awards="IFA ITA OSCAR";
    document.write("<br>"+actress.awards);
}*/


//complex objects

/*
var marksheet=
{

    maths:90,
    science:80,
    stats:95,
    result:function()
    {
        var total=(marksheet.maths+marksheet.science+marksheet.stats)/300;
       // alert(total);
        //alert((total*100).toFixed(2));
        document.write("<br><br>"+"Your result percentage: "+((total*100).toFixed(2))+"<br>");
        //document.write((total*100).toFixed(2));

      //  document.write("<br><br>"+"Your total marks: "+(marksheet.maths+marksheet.science+marksheet.stats));
        document.write(marksheet.maths+marksheet.science+marksheet.stats);

        // total=total*100;

        // document.writeln("<br><br>"+"Your result percentage: "+(Math.round(total*100)));

    },
    criteria_grades:
    {
        grade_A:"70-80",
        grade_B:"60-69",
        grade_C:"50-59"

    },
    biodata:[
        {Name:"Parkash",ID:"B11101067"},
        {Name:"Zain",ID:"B11101068"},
        {Name:"Hadi",ID:"B11101069"}
    ]

}
for(members in marksheet)
{
    document.write("<br>"+members+"==>"+marksheet[members]);
}

document.write(marksheet.result());
document.write("<br><br>"+"Type of="+typeof (marksheet.maths));
document.write("<br>"+marksheet.biodata[0].Name);
document.write("<br>"+marksheet.biodata[1].Name);
document.write("<br>"+marksheet.biodata[2].Name);
document.write("<br><br><br>"+"Grade Criteria");
document.writeln("<br>"+marksheet.criteria_grades.grade_A);
document.writeln("<br>"+marksheet.criteria_grades.grade_B);
document.writeln("<br>"+marksheet.criteria_grades.grade_C);
*/



//Construtor object
// In constructor object 'this' keyword is used to set the properties of object syntax:this.propertname=value
/*function car(model,year,color)
{
    this.model=model;
    this.year=year;
    this.color=color

}

 var mycar=new  car("civic",2013,"black");
var myothercar=new car("honda",2016,"Golden");
document.write(mycar.color);
document.write("<br>"+myothercar.year+"<br>");
for(members in mycar)
{
    document.writeln("<br>"+ mycar[members]);
}*/

//reference type

/*var a=mycar;
alert(a.model);*/

