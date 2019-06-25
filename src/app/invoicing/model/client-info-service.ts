export class ClientInfoService {
    private CLIENT_INFO_KEY = "client-infos";
    private clientInfos: ClientInfo[] = []
    
    constructor() {
        this.clientInfos = JSON.parse(localStorage.getItem(this.CLIENT_INFO_KEY));
        if(this.clientInfos == null) this.clientInfos = [];
    }

    public saveClientInfo(clientInfo:ClientInfo):void {
        if(this.clientInfos.some(e => e.name === clientInfo.name)) return;
        console.log(this.clientInfos)
        this.clientInfos.push(clientInfo)
        localStorage.setItem("client-infos", JSON.stringify(this.clientInfos))
    }
    
    public getClientInfos(): ClientInfo[] {
        return this.clientInfos;
    }
}

export interface ClientInfo {
    taxNumber: string;
    name: string;
}
