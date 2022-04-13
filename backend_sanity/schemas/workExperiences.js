export default {
    name:'workExperiences',
    title:'Work Experiences',
    type:'document',
    fields:[
           {
               name:'name',
               title:'Name',
               type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name: 'startMonthYear',
                title: 'Start Month - Year',
                type: 'string',
            },
            {
                name: 'endMonthYear',
                title: 'End Month - Year',
                type: 'string',
            },
            {
                name:'description',
                title:'Description',
                type:'string'
            }
    ]
}