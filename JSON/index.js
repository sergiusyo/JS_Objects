
{
    "userId": 1,
    "id": 2,
    "title": "Test title",
    "status": {
        "completed": false
    }
}

const post = {
  title: "My post",
  likesQty: 5,
};

JSON.stringify(post); 


const postStringified = JSON.stringify(post);


JSON.parse(postStringified);


