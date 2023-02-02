# API ROUTES

## Database table

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
- **DELETE** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/wishlists/userId/:userId)


#### Likelists
- **GET** ALL (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists)
- **GET** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists/userId/:userId)
- **POST** One (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists)
- **PUT** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists/userId/:userId)
- **DELETE** OneByUserId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/likelists/userId/:userId)



## Models 

#### SteamUserResumes
- **GET** OneBySteamGameId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/steamUserResumes/steamGameId/:steamGameId) 

#### Reviews 
- **GET** AllBySteamGameId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/reviews/steamGameId/:steamGameId) 

#### GameResumes
- **GET** OneBySteamGameId (https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/gameResumes/steamGameId/:steamGameId) 





