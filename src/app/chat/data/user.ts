import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryUserDbService implements InMemoryDbService {
  createDb() {
    let user = {
      "data": {
        "id": "5725a6802d10e277a0f35724",
        "name": "John Doe",
        "avatar": "assets/images/avatars/profile.jpg",
        "status": "online",
        "mood": "it's a status....not your diary..."
      }
    };

    return {user};
  }
}
