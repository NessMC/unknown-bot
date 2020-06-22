/*//////////////////////////////////////
          DISCORD BOT TEMPLATE
             Configuration
//////////////////////////////////////*/

export default {

    prefix          : '!'                         , // Bot command prefix
    name            : 'YOUR BOT NAME HERE'        , // Bot loading title
    description     : 'YOUR BOT DESCRIPTION HERE' , // Bot loading description
    cooldown        : 5000                        , // Bot commands cooldown
    
    color           : '#ff0000'                   , // Bot embed color
 
    loading         : {                             // Loading informations

        info        : {                             // Informations loading
            color   : '#'                         ,
            message : 'test'
        }                                         , 
        success     : {                             // Success loading
            color   : '#'                         ,
            message : 'test'
        }                                         , 
        error       : {                             // Error loading
            color   : '#'                         ,
            message : 'test'
        }                                         , 

        commands    : {                             // Commands loading
            color   : '#'                         ,
            message : 'test'
        }                                         , 
        events      : {                             // Events loading
            color   : '#'                         ,
            message : 'test'
        }

    }
}
