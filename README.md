# API ROUTES

## Database tables


#### Users
- **GET** ALL (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/users)
- **GET** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/users/userId/:userId)
- **GET** OneByUsername (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/users/username/:username)
- **POST** One (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/users)
- **PUT** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/users/userId/:userId)
- **DELETE** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/users/userId/:userId)

#### Wishlists
- **GET** ALL (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/wishlists)
- **GET** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/wishlists/userId/:userId)
- **POST** One (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/wishlists)
- **PUT** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/wishlists/userId/:userId)
- **PUT** AddOneGame (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/wishlists/userId/:userId/add/gameResumeId/:gameResumeId)
- **PUT** DeleteOneGame (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/wishlists/userId/:userId/delete/gameResumeId/:gameResumeId)
- **DELETE** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/wishlists/userId/:userId)


#### Likelists
- **GET** ALL (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists)
- **GET** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists/userId/:userId)
- **POST** One (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists)
- **PUT** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists/userId/:userId)
- **PUT** AddOneGame (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists/userId/:userId/add/gameResumeId/:gameResumeId)
- **PUT** DeleteOneGame (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists/userId/:userId/delete/gameResumeId/:gameResumeId)
- **DELETE** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists/userId/:userId)


## Models 

#### SteamUserResumes
- **GET** OneBySteamGameId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/steamUserResumes/steamGameId/:steamGameId) 

#### Reviews 
- **GET** AllBySteamGameId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/reviews/steamGameId/:steamGameId) 

#### GameResumes - Light version 
- **GET** OneBySteamGameId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/gamesLight/steamGameId/:steamGameId) 

#### GameResumes - Full version (with logo and icon)
- **GET** OneBySteamGameId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/gamesFull/steamGameId/:steamGameId) 
- **GET** OneByGameName (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/gamesFull/gameName/:gameName) 




