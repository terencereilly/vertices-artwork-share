{
    "title": "vertices-berlin",
    "contentUrl": "https://vertices-olta.vercel.app/",
    "description": "test description",
    "credits": [
      {
        "name": "test",
        "role": "",
        "address": ""
      }
    ],
    "admin": "dhw4tVkCwdD39XuUlna530Vy5tT2Xz6NId5DHysFQCI",
    "approvedMinters": {
      "dhw4tVkCwdD39XuUlna530Vy5tT2Xz6NId5DHysFQCI": true
    },
    "balances": {
      "dhw4tVkCwdD39XuUlna530Vy5tT2Xz6NId5DHysFQCI": {
        "dataType": "BigInt",
        "value": "0"
      }
    },
    "fee": {
      "dataType": "BigInt",
      "value": "0"
    },
    "isOpen": true,
    "projectState": {
      "configs": {
        "vertices": {
          "name": "vertices",
          "type": "object",
          "properties": {
            "x": {
              "name": "x",
              "type": "bigint",
              "min": "-10000000",
              "max": "10000000",
              "update": "set"
            },
            "y": {
              "name": "y",
              "type": "bigint",
              "min": "-10000000",
              "max": "10000000",
              "update": "set"
            },
            "z": {
              "name": "z",
              "type": "bigint",
              "min": "-10000000",
              "max": "10000000",
              "update": "set"
            },
            "lineColor": {
              "name": "lineColor",
              "type": "bigint",
              "min": "0",
              "max": "15658734",
              "update": "set"
            },
            "vertexColor": {
              "name": "vertexColor",
              "type": "bigint",
              "min": "0",
              "max": "15658734",
              "update": "set"
            }
          },
          "permissions": {
            "create": "open",
            "createType": "set",
            "update": "open",
            "updateType": "set",
            "remove": "admin",
            "removeType": "set"
          }
        }
      },
      "collections": {
        "vertices": {
  
        }
      }
    },
    "canEvolve": true,
    "evolve": null,
    "evaluationManifest": {
      "evaluationOptions": {
        "allowBigInt": true
      }
    }
  }