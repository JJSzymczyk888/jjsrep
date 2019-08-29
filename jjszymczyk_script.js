//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// Author:    Jacek Szymczyk (pronounced yah-tsek shim-chik)                                        //
// Phone:     +48 797 460 888                                                                       //
// Location:  Katowice, Poland, UTC+2                                                               // 
// Date:      August 29, 2019                                                                       //
//                                                                                                  //
// This file contains a JavaScript that implements a solution for the given problem:                //
//                                                                                                  //
//                We have an array of objects in JavaScript.                                        //
//                Each one contains a name (a string) and ranking (a number).                       //
//                Write two functions, one to return the objects ordered by ranking and another     //
//                to return the average ranking.                                                    //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////


//
// we need an array of objecs, let's call this array of entities
//
let entities = []; 
 

//
// we need to define an antity that has a name and a ranking that could be:
// a person, an institution, a book, etc. We don't know what is it axactly hence 
// the generic name for our object: "an entity" 
//

////////////////////////////////////////////////////////
//                                                    //
// let's populate our table with ten entities         //
//                                                    //
////////////////////////////////////////////////////////
function setInitialVals () {
    for (i=0; i<10; i++) {
    
        random_int = Math.round (Math.random (1,10) * 100),  

        entities[i]=
        { 
            // we might like to have name related to the enitity's ranking
            name: "entity_" + random_int.toString(), 

            // we assume that the ranking assumes values from 1 to 100   
            ranking: random_int,            
        }


     }
}


///////////////////////////////////////////////////////////////
//                                                           //
//   it's good to know the table's contents                  // 
//   so here is a simple contents printing function          //                                 
//                                                           //  
///////////////////////////////////////////////////////////////
function printObjs (tableofobjs) {

       console.log("\#================================#");

        for (i=0; i < tableofobjs.length ; i++)
        {
            console.log("   " + 
            tableofobjs[i].name + 
            ": its ranking is " + tableofobjs[i].ranking.toString() );
        } 

        console.log("#================================#");
} 


///////////////////////////////////////////////////////////////
//                                                           //
//    A function, which calculates an average ranking value  // 
//                                                           //  
///////////////////////////////////////////////////////////////
function averageRanking (tableofobjs) {

       sum = 0;  

        for (i=0; i < tableofobjs.length ; i++)
        {
            sum = sum +tableofobjs[i].ranking ;
        } 
        return sum/tableofobjs.length;
} 


///////////////////////////////////////////////////////////////
//                                                           //
//    A function, which sorts an array of entities           // 
//                                                           //  
///////////////////////////////////////////////////////////////
function sortEntities (entitiesArray)
{
    entitiesArray.sort( function compareEntities (entity1, entity2) 
                  {
	               // Ascending: first the less ranking than the previous
	                return entity1.ranking - entity2.ranking ;    
                   })
}


// 
// The "main" program" that invokes our functions amd presents their results  
// 

setInitialVals() ;
console.log("\nAn entities' array randomly generated contents:"); 
printObjs (entities);
console.log("\nThe averageranking of all entities is: "+ averageRanking(entities).toString());
sortEntities (entities);
console.log("\nEntities sorted by their ranking, in an ascending order:"); 
printObjs (entities);
