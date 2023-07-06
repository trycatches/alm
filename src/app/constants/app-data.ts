import { Router } from '@angular/router';
export interface AppDataInterface {
   section:string,
   navigations:object,
   configs:{
    [key: string]:{
        title:string,
        download:boolean,
        downloads:object,
        table:object
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
            download:false,
            downloads:{},
            table:{}
        },
        "summ-runs":{
            title:"Calc & Summ Runs",
            download:false,
            downloads:{},
            table:{}
        },
        "bucketing":{
            title:"GL Bucketing",
            download:false,
            downloads:{},
            table:{
                data:{},
                rows:10,
                rowNumber:[10,20,50,100],
                totalRows:0,
                page:1
            }
        },
        "mapping":{
            title:"GL Mapping",
            download:false,
            downloads:{},
            table:{
                data:{},
                rows:10,
                rowNumber:[10,20,50,100],
                totalRows:0,
                page:1
            }
        },
    },
    activeConfig:{},
    profile:{
        username:"John Smith",
        role:"Business User"
    }
 }