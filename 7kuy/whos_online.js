/* You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#). */

/* 
У вас есть приложение для группового чата, но кто сейчас онлайн?!
Вы хотите показать пользователям, кто из их друзей онлайн и доступен для общения!
На входе находится массив объектов, содержащих имена пользователей, статус и время с момента последней активности (в минутах). Создайте функцию для определения того, кто онлайн, кто офлайн и кто отсутствует.
Если кто-то онлайн, но его последняя активность была более 10 минут назад, он должен считаться отсутствующим. */
/* 
Входные данные имеют следующую структуру:

[{
username: 'David',
status: 'online',
lastActivity: 10
}, {
username: 'Lucy', 
status: 'offline',
lastActivity: 22
}, {
username: 'Bob', 
status: 'online',
lastActivity: 104
}]
Соответствующий вывод должен выглядеть следующим образом:
{
online: ['David'],
offline: ['Lucy'],
away: ['Bob']
}
Если, например, ни один пользователь не находится в сети, вывод должен выглядеть следующим образом:
{
offline: ['Lucy'],
away: ['Bob']
}
username всегда будет строкой, status всегда будет либо 'online', либо 'offline' (перечисление UserStatus в C#), а lastActivity всегда будет числом. >= 0.
Наконец, если у вас нет друзей в чате, на вход будет пустой массив []. В этом случае следует вернуть пустой объект {} (пустой словарь в C#). */

const whosOnline = (friends) => {
    let status = {};
    if (friends === false) { return {}; }
    else {
        for (let i = 0; i < friends.length; i++) {
            let friend = friends[i];
            if (friend.status === 'online' && friend.lastActivity <= 10) {
                if (!status.online) { status.online = []; }
                status.online.push(friend.username);
            } else if (friend.status === 'online' && friend.lastActivity > 10) {
                if (!status.away) { status.away = []; }
                status.away.push(friend.username);
            } else if (friend.status === 'offline') {
                if (!status.offline) { status.offline = []; }
                status.offline.push(friend.username);
            }
        }
    }
    return status;
}
