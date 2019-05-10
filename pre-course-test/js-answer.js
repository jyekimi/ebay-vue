/*
문제)
아래의 API는 100개의 게시글에 대한 정보를 배열로 받을 수 있는 API입니다.
https://jsonplaceholder.typicode.com/posts
HTTP 통신 라이브러리로 위 API를 호출한 뒤 특정 userId에 해당하는 변수를 다음과 같이 만듭니다.
ex) userId가 1이면 변수 이름은 user1
게시글 정보 중 해당 userId에 해당하는 게시글의 title 정보만 모아 아래와 같이 객체 형태로 저장합니다.
ex) user1 = {
  title1: '',
  title2: '',
  ...
  title10: ''
};
*/

/*
ex) API 예시
[
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
  }
  ...
]
*/

/*
ex) 답안 예시
userId가 1인 게시글의 제목을 객체에 모두 저장
var user1 = {
  title1: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  title2: "qui est esse",
  ...
}
var user2 = {
  title1: ...,
  title2: ...
}
*/
// TODO: 아래에 답안을 작성해주세요.

import axios from 'axios'

const getData = (prefix, key) => target => json => json.reduce((rv, x) => {
    (rv[prefix + x[key]] = rv[prefix +x[key]] || []).push(x[target]);
    return rv;
}, {});

var getTitlesByUserId = getData('user', 'userId')('title')
var response = {};

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        if (res && res.data  && res.data.length > 0) {
            var posts = res.data;
            response = posts.reduce((accumulator, value) => {
                var userKey = 'user' + value.userId;
                if (accumulator.hasOwnProperty(userKey)) {
                    var titleKey = 'title' + (Object.keys(accumulator[userKey]).length + 1);
                    accumulator[userKey][titleKey] = value.title;
                }
                else {
                    accumulator[userKey] = {
                        'title1': value.title
                    }
                }
                return accumulator;
            }, {});
        }

        document.getElementById('response').innerText = JSON.stringify(response, undefined, 2);
    });

/*
{ user1:
   [ 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
     'qui est esse',
     'ea molestias quasi exercitationem repellat qui ipsa sit aut',
     'eum et est occaecati',
     'nesciunt quas odio',
     'dolorem eum magni eos aperiam quia',
     'magnam facilis autem',
     'dolorem dolore est ipsam',
     'nesciunt iure omnis dolorem tempora et accusantium',
     'optio molestias id quia eum' ],
 ...
 }