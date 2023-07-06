export interface AppDataInterface {
   section:string,
   navigations:object,
   configs:{
    [key: string]:{
        title:string,
        download:boolean,
        downloadFiles:object,
        table:object,
        monthSelector:boolean,
        months:object,
        monthSelected:number,
        addOSB:boolean,
        addUser:boolean
    }
   },
   activeConfig:object,
   profile:{
    username:string,
    role:string
   }
}
export const AppData:AppDataInterface  = {
    section:"",
    navigations :   [
                        {
                            title:"Data Leads",
                            link:"/dashboard/data-leads"
                        },
                        {
                            title:"Calc & Summ Runs",
                            link:"/dashboard/summ-runs"
                        },
                        {
                            title:"GL Bucketing",
                            link:"/gl/bucketing"
                        },
                        {
                            title:"GL Mapping",
                            link:"/gl/mapping"
                        }
                    ],
    configs:{
        "data-leads":{
            title:"Data Leads",
            download:true,
            downloadFiles:[
                {
                    title:"Summery Returns",
                    icon:"",
                    api:""
                },
                {
                    title:"Asset Summery",
                    icon:"",
                    api:""
                }
            ],
            table:{},
            monthSelector:true,
            months:[
                { id: 1, name: 'January' },
                { id: 2, name: 'February' },
                { id: 3, name: 'March' },
                { id: 4, name: 'April' },
                { id: 5, name: 'May' },
                { id: 6, name: 'June' },
                { id: 7, name: 'July' },
                { id: 8, name: 'August' },
                { id: 9, name: 'September' },
                { id: 10, name: 'October' },
                { id: 11, name: 'November' },
                { id: 12, name: 'December' },
            ],
            monthSelected:(new Date().getMonth() + 1),
            addOSB:false,
            addUser:false
        },
        "summ-runs":{
            title:"Calc & Summ Runs",
            download:true,
            downloadFiles:[],
            table:{},
            monthSelector:true,
            months:[
                { id: 1, name: 'January' },
                { id: 2, name: 'February' },
                { id: 3, name: 'March' },
                { id: 4, name: 'April' },
                { id: 5, name: 'May' },
                { id: 6, name: 'June' },
                { id: 7, name: 'July' },
                { id: 8, name: 'August' },
                { id: 9, name: 'September' },
                { id: 10, name: 'October' },
                { id: 11, name: 'November' },
                { id: 12, name: 'December' },
            ],
            monthSelected:(new Date().getMonth() + 1),
            addOSB:false,
            addUser:false
        },
        "bucketing":{
            title:"GL Bucketing",
            download:false,
            downloadFiles:[],
            table:{
                data:{},
                rows:10,
                rowNumber:[10,20,50,100],
                totalRows:0,
                page:1,
                filter:true
            },
            monthSelector:false,
            months:[],
            monthSelected:0,
            addOSB:true,
            addUser:false
        },
        "mapping":{
            title:"GL Mapping",
            download:false,
            downloadFiles:[],
            table:{
                data:{},
                rows:10,
                rowNumber:[10,20,50,100],
                totalRows:0,
                page:1,
                filter:true
            },
            monthSelector:false,
            months:[],
            monthSelected:0,
            addOSB:false,
            addUser:false
        },
        "user-management":{
            title:"User Management",
            download:false,
            downloadFiles:[],
            table:{
                data:{},
                rows:10,
                rowNumber:[10,20,50,100],
                totalRows:0,
                page:1,
                filter:true,
            },
            monthSelector:false,
            months:[],
            monthSelected:0,
            addOSB:false,
            addUser:true
        }
    },
    activeConfig:{},
    profile:{
        username:"John Smith",
        role:"Business User"
    }
 }