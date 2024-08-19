## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

```Docker
- docker build -t image-name

- docker run -p 3000:3000 image-name
```

# Character Management API

This API provides functionality to manage characters, episodes, comments, and locations in a fictional world. Below is the documentation of the available methods and endpoints.

## Table of Contents

- [Character Management API](#character-management-api)
  - [Table of Contents](#table-of-contents)
  - [Character Endpoints](#character-endpoints)
    - [List Characters](#list-characters)
    - [Create Character](#create-character)
    - [Search Episode for Character](#search-episode-for-character)
  - [Comment Endpoints](#comment-endpoints)
    - [List Comments](#list-comments)
  - [Episode Endpoints](#episode-endpoints)
    - [Create Episode](#create-episode)
    - [List Episodes](#list-episodes)
    - [Find Single Episode](#find-single-episode)
    - [Add Comment to Episode](#add-comment-to-episode)
  - [Location Endpoints](#location-endpoints)
    - [Create Location](#create-location)
    - [Get Locations](#get-locations)

## Character Endpoints

### List Characters

- **Method**: `GET`
- **Endpoint**: `/api/characters`
- **Query Parameters**:
  - `sort` (optional): The field to sort by (default: `first_name`).
  - `order` (optional): The sort order (`ASC` or `DESC`, default: `ASC`).
  - `gender` (optional): Filter by gender.
  - `location` (optional): Filter by location.
  - `filterStatus` (optional): Filter by character status.
- **Response**:
  - 200 OK: List of characters.
  - Example:
    `json
    {
    "success": true,
    "data": [
        {
            "id": "aad0b153-6a7f-4621-8ed9-8b00d7d67bbc",
            "createdAt": "2024-08-17T23:48:00.913Z",
            "first_name": "Matthew",
            "last_name": "Ndubuisi",
            "status": "ALIVE",
            "state_of_origin": "Imo",
            "gender": "MALE"
        },
        {
            "id": "a560ab88-ed36-4f0b-a8af-f7af909e8790",
            "createdAt": "2024-08-19T15:39:56.269Z",
            "first_name": "Matthew",
            "last_name": "Ndubuisi",
            "status": "ALIVE",
            "state_of_origin": "Imo",
            "gender": "MALE"
        },
        {
            "id": "8121f491-ee66-4a01-851d-581bb6ed5546",
            "createdAt": "2024-08-19T17:31:04.959Z",
            "first_name": "Matthew",
            "last_name": "Ndubuisi",
            "status": "ALIVE",
            "state_of_origin": "Imo",
            "gender": "MALE"
        }
    ],
    "message": "Characters fetched successfully"
}
    `

### Create Character

- **Method**: `POST`
- **Endpoint**: `/api/characters/create`
- **Request Body**:
  - `first_name`: First name of the character.
  - `last_name`: Last name of the character.
  - `state_of_origin`: State of Origin Of the Character
  - `gender`: Gender of the character. MALE or FEMALE
  - `status`: Status of the character. Can be either ALIVE, DEAD OR UNKNOWN
  - `locationId` (optional): ID of the location.
  - `episode` (optional): Array of episode IDs.
- **Response**:
  - 201 Created: The created character.
  - Example:
    ```json
    {
      "data": {
        "id": 2,
        "first_name": "Jane",
        "last_name": "Doe",
        "gender": "female",
        "status": "alive"
      },
      "message": "Character created successfully"
    }
    ```

### Search Episode for Character

- **Method**: `GET`
- **Endpoint**: `/api/characters/search`
- **Query Parameters**:
  - `name`: Name of the character to search for (supports partial matching).
- **Response**:
  - 200 OK: List of episodes where the character appears.
  - Example:
    `json
    {
    "success": true,
    "data": [
        {
            "id": "7123e73b-ea32-4703-b2cb-0ea88425fa6e",
            "createdAt": "2024-08-19T14:44:37.121Z",
            "name": "Prison Break",
            "release_date": "2024-08-19T00:00:00.000Z",
            "episode_code": "ABCD!"
        },
        {
            "id": "7123e73b-ea32-4703-b2cb-0ea88425fa6e",
            "createdAt": "2024-08-19T14:44:37.121Z",
            "name": "Prison Break",
            "release_date": "2024-08-19T00:00:00.000Z",
            "episode_code": "ABCD!"
        },
        {
            "id": "7123e73b-ea32-4703-b2cb-0ea88425fa6e",
            "createdAt": "2024-08-19T14:44:37.121Z",
            "name": "Prison Break",
            "release_date": "2024-08-19T00:00:00.000Z",
            "episode_code": "ABCD!"
        },
        {
            "id": "7123e73b-ea32-4703-b2cb-0ea88425fa6e",
            "createdAt": "2024-08-19T14:44:37.121Z",
            "name": "Prison Break",
            "release_date": "2024-08-19T00:00:00.000Z",
            "episode_code": "ABCD!"
        }
    ],
    "message": "Episodes fetched successfully"
}
    `

## Comment Endpoints

### List Comments

- **Method**: `GET`
- **Endpoint**: `/api/comments`
- **Response**:
  - 200 OK: List of comments.
  - Example:
    `json
    {
    "success": true,
    "data": [
        {
            "createdAt": "2024-08-19T18:24:05.658Z",
            "comment": "This episode is interesting",
            "ip_address_location": "::1"
        },
        {
            "createdAt": "2024-08-19T14:48:16.728Z",
            "comment": "This episode is interesting",
            "ip_address_location": "Abakaliki"
        }
    ],
    "message": "Comments fetched successfully"
}
    `

## Episode Endpoints

### Create Episode

- **Method**: `POST`
- **Endpoint**: `/api/episodes`
- **Request Body**:
  - `name`: Name of the episode.
  - `release_date`: Release date of the episode.
  - `episode_code`: Episode Short Code
- **Response**:
  - 201 Created: The created episode.
  - Example:
    `json
    {
    "success": true,
    "data": {
        "name": "Prison Break",
        "release_date": "2024-08-19T00:00:00.000Z",
        "episode_code": "ABCD!",
        "id": "57fb7440-0886-4d57-b88f-e371d3fb3d90",
        "createdAt": "2024-08-19T18:33:42.201Z"
    },
    "message": "Episode created successfully"
}
    `

### List Episodes

- **Method**: `GET`
- **Endpoint**: `/api/episodes`
- **Response**:
  - 200 OK: List of episodes.
  - Example:
    `json
    [
    {
        "id": "7123e73b-ea32-4703-b2cb-0ea88425fa6e",
        "createdAt": "2024-08-19T14:44:37.121Z",
        "name": "Prison Break",
        "release_date": "2024-08-19T00:00:00.000Z",
        "episode_code": "ABCD!",
        "episode_comments": [
            {
                "id": "cb6cd188-dd37-45e4-8e8c-6ec70ab37162",
                "createdAt": "2024-08-19T14:48:16.728Z",
                "comment": "This episode is interesting",
                "ip_address_location": "Abakaliki"
            }
        ],
        "commentCount": 1
    }
]
    `

### Find Single Episode

- **Method**: `GET`
- **Endpoint**: `/api/episodes/:id`
- **URL Parameters**:
  - `id`: The ID of the episode.
- **Response**:
  - 200 OK: The episode details.
  - Example:
    `json
    {
    "success": true,
    "data": {
        "id": "7123e73b-ea32-4703-b2cb-0ea88425fa6e",
        "createdAt": "2024-08-19T14:44:37.121Z",
        "name": "Prison Break",
        "release_date": "2024-08-19T00:00:00.000Z",
        "episode_code": "ABCD!",
        "episode_comments": [
            {
                "id": "cb6cd188-dd37-45e4-8e8c-6ec70ab37162",
                "createdAt": "2024-08-19T14:48:16.728Z",
                "comment": "This episode is interesting",
                "ip_address_location": "Abakaliki"
            }
        ]
    },
    "message": "Episode fetched successfully"
}
    `

### Add Comment to Episode

- **Method**: `POST`
- **Endpoint**: `/api/episodes/:id
- **URL Parameters**:
  - `id`: The ID of the episode.
- **Request Body**:
  - `comment`: The content of the comment.
- **Response**:
  - 201 Created: The updated episode with the new comment.
  - Example:
    ```json
    {
      "data": {
        "id": 3,
        "name": "The Adventure Begins",
        "createdAt": "2024-08-19T14:44:37.121Z",
        "release_date": "2024-08-15",
        "episode_code": "ABCD!",
        "episode_comments": [
          {
            "id": "cb6cd188-dd37-45e4-8e8c-6ec70ab37162",
            "createdAt": "2024-08-19T14:48:16.728Z",
            "comment": "This episode is interesting",
            "ip_address_location": "Abakaliki"
          }
        ]
      },
      "message": "Comment added successfully"
    }
    ```

## Location Endpoints

### Create Location

- **Method**: `POST`
- **Endpoint**: `/api/locations`
- **Request Body**:
  - `name`: Name of the location.
  - `latitude`: Latitude of the location.
  - `longitude`: Longitude of the location.
- **Response**:
  - 201 Created: The created location.
  - Example:
    ```json
    {
      "data": {
        "id": 1,
        "name": "Central Park",
        "latitude": 40.785091,
        "longitude": 73.968285
      },
      "message": "Location created successfully"
    }
    ```

### Get Locations

- **Method**: `GET`
- **Endpoint**: `/api/locations`
- **Response**:
  - 200 OK: List of locations.
  - Example:
    ```json
    {
      "data": [
        {
          "id": 1,
          "name": "Central Park",
          "latitude": 40.785091,
          "longitude": -73.968285
        }
      ],
      "message": "Locations fetched successfully"
    }
    ```
