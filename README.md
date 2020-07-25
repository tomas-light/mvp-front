# BizarreLab client-side application

Веб приложение состоит из двух проектов:
* [https://github.com/BizarreLab/bizarre-monster](https://github.com/BizarreLab/bizarre-monster)
* [https://github.com/BizarreLab/mvp-front](https://github.com/BizarreLab/mvp-front)

# 
 * [Сборка](#build)
 * [Запуск dev-окружения](#dev-config)
 * [Настройка](#config)
 * [Тесты](#tests)

### <a name="build"></a> Сборка
Скопируйте содержимое файла `/.env.example` в `/.env`

Чтобы собрать приложение выполните следующие команды в корне проекта
```
npm i
npm run prod
```

### <a name="dev-config"></a> Запуск dev-окружения

Для запуска dev-окружения необходимо:

1. Внести изменения в файл hosts, добавить два хоста:
```
127.0.0.1       bizarre-dev.rest
127.0.0.1       shaurma-zbs.bizarre-dev.rest
```

2. Установить самоподписный сертификат из файла `nginx-selfsigned.crt` и дать ему все права.

3. Выполнить `docker-compose up`.

Compose поднимет окружение, включающее базу данных, api и nginx. 

Детали конфига nginx:
- слушает порты 80 и 443, <b>важно</b> отключить все остальные веб-серверы, которые могут быть настроены на эти порты;
- настроен автоматический редирект с http на https;
- проксирует запросы к api, все методы api доступны с префиксом /api, например, `https://bizarre-dev.rest/api/users/signed`, но есть исключение, методы `/signin` и `/signout` работают без префикса;
- веб-сервер настроен на директорию public, т.е. веб-приложение должно быть заранее собрано.

Swagger доступен по порту 5001, например `https://bizarre-dev.rest:5001/swagger/`.

### <a name="config"></a> Настройка
Можно изменить конфигурацию проекта через файл `/.env`

`FAKE_DATA` - Позволяет использовать фальшивые данные, вместо обращений к endpoint'ам api. Можно использовать для демо. После обновления страницы все данные теряются. Если хотите, могу сохранять данные в localStorage ?)

`API_BASE_URL` - базовый путь к api

Здесь же можно изменить api адреса (после строк `# api utls`).

### <a name="tests"></a> Тестирование
#### <a name="tests-endpoint"></a> Endpoint тесты
Чтобы проверить работает ли api (может ли клиентское приложения корректно получать данные), настройте следующие параметры в файле `.env`:
 * `TEST_API_URL` - корневой url приложения (регистрация нового ресторана) 
 * `TEST_API_COOKIE` - cookie  пользователя, авторизованного в корневом приложении
 * `TEST_TENANT_API_URL` - url конкретного ресторана 
 * `TEST_API_TENANT_COOKIE` - cookie  пользователя, авторизованного в приложении ресторана
 
 Чтобы запустить тесты выполните команду `npm run test`, дождитесь окончания выполнения всех тестов. 
 Если какие-то тесты упали (завершились с ошибкой), вы увидите в консоли красные сообщения с подробной информацией о том, какой тест провалился и в каком месте.
 
 Если один или несколько тестов провалились, проверьте, правильно ли вы указали cookie. 
 Если вы уверены, что всё сделали правильно, а тесты провалились, это значит, что endpoint'ы изменились, а клиентское приложение не обновилось. В этом случае свяжитись с одним из фронтендеров команды.
