import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class RecordsService {

    constructor(private http: HttpClient) {

    }

    getData() {
        return this.http.get("http://localhost:1234/test.php");
    }

}