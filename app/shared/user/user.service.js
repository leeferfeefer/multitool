"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        // return this.http.post(
        //     Config.apiUrl + "user/" + Config.appKey,
        //     JSON.stringify({
        //         username: user.email,
        //         email: user.email,
        //         password: user.password
        //     }),
        //     { headers: this.getCommonHeaders() }
        // )
        //     .catch(this.handleErrors);
    };
    UserService.prototype.login = function (user) {
        // return this.http.post(
        //     Config.apiUrl + "user/" + Config.appKey + "/login",
        //     JSON.stringify({
        //         username: user.email,
        //         password: user.password
        //     }),
        //     { headers: this.getCommonHeaders() }
        // )
        //     .map(response => response.json())
        //     .do(data => {
        //         Config.token = data._kmd.authtoken
        //     })
        //     .catch(this.handleErrors);
    };
    UserService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", config_1.Config.authHeader);
        return headers;
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4Q0FBNkM7QUFDN0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFHL0Isb0NBQW1DO0FBR25DO0lBQ0kscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLHlCQUF5QjtRQUN6QiwrQ0FBK0M7UUFDL0MsdUJBQXVCO1FBQ3ZCLGdDQUFnQztRQUNoQyw2QkFBNkI7UUFDN0Isa0NBQWtDO1FBQ2xDLFVBQVU7UUFDViwyQ0FBMkM7UUFDM0MsSUFBSTtRQUNKLGlDQUFpQztJQUNyQyxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFDWix5QkFBeUI7UUFDekIsMERBQTBEO1FBQzFELHVCQUF1QjtRQUN2QixnQ0FBZ0M7UUFDaEMsa0NBQWtDO1FBQ2xDLFVBQVU7UUFDViwyQ0FBMkM7UUFDM0MsSUFBSTtRQUNKLHdDQUF3QztRQUN4QyxvQkFBb0I7UUFDcEIsNkNBQTZDO1FBQzdDLFNBQVM7UUFDVCxpQ0FBaUM7SUFDckMsQ0FBQztJQUVELHNDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUExQ1EsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUVpQixXQUFJO09BRHJCLFdBQVcsQ0EyQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgIC8vICAgICBDb25maWcuYXBpVXJsICsgXCJ1c2VyL1wiICsgQ29uZmlnLmFwcEtleSxcbiAgICAgICAgLy8gICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLy8gICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcbiAgICAgICAgLy8gICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgLy8gICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICAgICAgLy8gKVxuICAgICAgICAvLyAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBsb2dpbih1c2VyOiBVc2VyKSB7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgLy8gICAgIENvbmZpZy5hcGlVcmwgKyBcInVzZXIvXCIgKyBDb25maWcuYXBwS2V5ICsgXCIvbG9naW5cIixcbiAgICAgICAgLy8gICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLy8gICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcbiAgICAgICAgLy8gICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICAgICAgLy8gKVxuICAgICAgICAvLyAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC8vICAgICAuZG8oZGF0YSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgQ29uZmlnLnRva2VuID0gZGF0YS5fa21kLmF1dGh0b2tlblxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBDb25maWcuYXV0aEhlYWRlcik7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59Il19