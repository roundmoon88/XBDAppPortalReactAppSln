import React, { Component } from 'react';
//added by Richard
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;
    //state = {
    //    appPortals: [
    //        //{ appId: 1, appName: "XBD Article", appDes: null, appTypeId: 1, appType: "Asp.net Web Form" },
    //        //{ appId: 2, appName: "Source Document", appDes: null, appTypeId: 1, appType: "Asp.net Web Form" }
    //    ]
    //}
    
    constructor(props) {
        super(props);


        this.state = {
            baseUrl: document.getElementsByTagName("base")[0].href,
            appPortalsCur: [],
            appPortals: [
                /*
                { appId: 1, appName: "XBD Article", appDes: null, appTypeId: 1, appType: "Asp.net Web Form" },
                { appId: 2, appName: "Source Document", appDes: null, appTypeId: 1, appType: "Asp.net Web Form" },
 
                */
            ],
            appSelected: 0,
            appTypeSelected: 0,
            appList: [
                { itemId: 1, item: "XBD Article", selected: false, filterName: 0 },
                { itemId: 2, item: "Source Document", selected: false, filterName: 0 },
                { itemId: 3, item: "Job Seeking Management", selected: false, filterName: 0 },
                { itemId: 4, item: "Bert", selected: false, filterName: 0 },
                { itemId: 5, item: "DVBBS", selected: false, filterName: 0 },
                { itemId: 6, item: "XBD Images", selected: false, filterName: 0 },
                { itemId: 7, item: "Ribo App Portals", selected: false, filterName: 0 }
            ],
            appList1: [
            ],
            appTypeList: [
                { itemId: 1, item: "Asp.net Web Form", selected: false, filterName: 0 },
                { itemId: 2, item: "Asp.net MVC", selected: false, filterName: 0 },
                { itemId: 3, item: "React", selected: false, filterName: 0 },
                { itemId: 4, item: "Angular", selected: false, filterName: 0 }
            ],
            appTypeList1: [
            ],
            myTempDataForTest: null

            
        };

        this.handleAppFilter = this.handleAppFilter.bind(this);
        this.handleAppTypeFilter = this.handleAppTypeFilter.bind(this);
        //!!
        this.tempPopulateData = this.tempPopulateData.bind(this);
    }

    handleAppFilter(event) {
        //update the selected App
        this.setState({
            appSelected: event.target.value
        });


    }
    handleAppTypeFilter(event) {
        //update the selected App Type
        this.setState({
            appTypeSelected: event.target.value
        });
    }
    componentWillUpdate() {
        //alert("L70 will update event");
        //let myUrl = this.state.baseUrl + this.state.appSelected + "/" + this.state.appTypeSelected;
        //alert(myUrl);
    }
    componentWillMount() {
        //let url = "https://localhost:44307/api/RiboAppPortals/0/0";
        //let url = "https://localhost:44307/api/RiboAppPortals/7/0";
        const urlRiboAppPortals = this.state.baseUrl + "api/RiboAppPortals/" + this.state.appSelected + "/" + this.state.appTypeSelected;
        console.log("L78:", this.state.baseUrl + "api/RiboAppPortals/" + this.state.appSelected + "/" + this.state.appTypeSelected);
        //1) load RiboAppPortals
        this.populateData(urlRiboAppPortals, 1);
        //2) load AppFilters
        const urlAppFilters = this.state.baseUrl + "api/FilterList/1";
        this.populateData(urlAppFilters, 2);
        //3) laod AppTypeFilters
        const urlAppTypeFilters = this.state.baseUrl + "api/FilterList/2";
        this.populateData(urlAppTypeFilters, 3);

        console.log("L77:", urlAppFilters);
        console.log("L78:", urlAppTypeFilters);
        console.log("L79:", this.populateData(urlAppFilters));
        console.log("L80:", this.populateData(urlAppTypeFilters));

        //temp test my self-host web api //!!
        //http://localhost:1234/api/student?id=1
        //const tempData = fetch("http://localhost:1234/api/student?id=1");
        //console.log("L98 tempData", tempData);
        this.tempPopulateData();

    }

    async tempPopulateData() {
    //    //test request imag
    //    const myIamage = document.querySelector("#myImage");
    //    const myIamage2 = document.querySelector("#myImage2");
    //    const myIamage3 = document.querySelector("#myImage3");
    //    const myImageRequest = new Request("favicon.ico");
    //    const result1 = fetch(myImageRequest).then(response => response.blob()).then(blobResult => {
    //        const objectUrl = URL.createObjectURL(blobResult);
    //        console.log("L112 myImage blob resul:", blobResult);
    //        console.log("L113 myImage url:", objectUrl);
    //        console.log("L114 myImage:", myIamage);
    //        console.log("L115 myImage2:", myIamage2);
    //        console.log("L116 myImage3:", myIamage3);
    //        myIamage.src = objectUrl;
    //        myIamage3.src = "favicon.ico";
    //    });

        const myRequest = new Request("http://localhost:1234/api/student?id=1");
        console.log("L107 for Request mode:", myRequest);
        console.log("L108 for Request mode:", myRequest.mode);
        //console.log("L126 for Request header:", myRequest.headers["Access-Control-Allow-Origin"])
        console.log("L126 for Request header:", myRequest.headers);
        //const response = await fetch("http://localhost:1234/api/student?id=1");
        //const response = await fetch(myRequest);
        //https://localhost:44317/api/values
        const url1 = "https://localhost:44317/api/values";
        const response = await fetch(url1,
            {
                mode: 'cors',
                //mode:'no-cors',
                ////headers:[]
                headers: { 
                ////    'Content-Type': 'application/json',
                ////    'Access-Control-Allow-Origin': 'http://localhost:1234'
                    'Access-Control-Allow-Origin': '*'
                },
                headers: {
                    //'Content-Type': 'application/xml'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },

            });
        const data = await response.json();
        this.setState({ myTempDataForTest: data });
        console.log("L112 tempData", this.state.myTempDataForTest);
        
        
    }
    componentDidMount() {//!!
        console.log("this.state.appPortals1", this.state.appPortals);
    }
    //https://localhost:44307/api/RiboAppPortals/1/0
    //https://localhost:44307/api/RiboAppPortals/0/0
    async populateData(url, source ) {

        //let myUrl = this.state.baseUrl + this.state.appSelected + "/" + this.state.appTypeSelected;
        //console.log("myUrl L89", myUrl);
        const response = await fetch(url);
        const data = await response.json();

        if (source == 1) {
            this.setState({ appPortals: data });
            this.setState({ appPortalsCur: data });
        }
        else if (source == 2) {
            this.setState({ appList: data });
        }
        else {
            this.setState({ appTypeList: data });
        }

    }
    onGoClick() {


        //get the sepcified appId and specificed appTypeId
        //1) this.state.appSelected
        //2) this.state.appTypeSelected
        const temp = this.state.appPortals.filter(row =>
            (row.appId == this.state.appSelected || this.state.appSelected == 0) &&
            (this.state.appTypeSelected == row.appTypeId || this.state.appTypeSelected == 0)
        );
        
        this.setState({ appPortalsCur: temp });

    }
    render() {
        
    return (
        <div id="homeContainer">
            <div className="portalListRoot">
                <div className="header">Welcome to Ribo App Portals (React) </div>
                <div className="filterWrap">
                    <select name="ddlAppName" id="ddlAppName" className="filter" value={ this.state.appSelected } onChange={ this.handleAppFilter }>
                        <option value="0">All Apps</option>
                        {
                            this.state.appList.map((row, index) => <option key={index} value={row.itemId}>{ row.item }</option>)
                            
                        };
                    </select>
                    <select name="ddlAppType" id="ddlAppType" className="filter" value={this.state.appTypeSelected} onChange={this.handleAppTypeFilter} >
                        <option value="0">All App Types</option>
                        {
                            this.state.appTypeList.map((row, index) =>
                               <option key={index} value={row.itemId}>{row.item}</option>
                            )};
                    </select>
                    <input type="button" name="btnFilter" value="Go" id="btnFilter" className="filter" onClick={() => this.onGoClick() }></input>
                </div>
                <table style={{ margin: "auto" }}>
                    <tbody>
                        <tr>
                            <th>AppId</th>
                            <th>App Name</th>
                            <th>App Description</th>
                            <th>AppTypeId</th>
                            <th>App Type</th>
                        </tr>
                        {
                            //this.state.appPortals.map((row, index) =>
                            this.state.appPortalsCur.map((row, index) =>
                                <tr key={index}>
                                    <td>{row.appId}</td>
                                    <td>{row.appName}</td>
                                    <td>{row.appDes}</td>
                                    <td>{row.appTypeId}</td>
                                    <td>{row.appType}</td>
                                </tr>)
                        }
                        

                    </tbody>

                </table>
            </div>
 
    
      </div>
        );


    }

   
}
