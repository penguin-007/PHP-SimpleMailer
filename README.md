# SimpleMailer
Универсальный скрипт отправки почты.


Подключение
------

```
<!-- css -->
<link rel="stylesheet" href="libs/SimpleModal/simple_modal.css">

<!-- js -->
<script src="simpleMailer/simpleMailer.js"></script>

```


Пример формы
------
```
<form class="fn_simpleMailer" data-callback="test"  >

  <input type="text" name="fio">
  <input type="tel"  name="phone">

  <!-- или -->
  <input type="text" name="ФИО">
  <input type="tel"  name="Телефон">

  <!-- если надо поле с файлом (пока работает только с одним) -->
  <input type="file" name="file">

  <!-- hidden input -->
  <input type="hidden" name="form_subject"  value="Тема">
  <input type="hidden" name="form_title"    value="Заголовок">
  <input type="hidden" name="form_redirect" value="spasibo-za-obrashhenie/">
  <input type="hidden" name="form_template" value="register">
  <!-- hidden input -->

  <input type="submit" value="Отправить">

</form>
```
**form_subject**  - Тема письма (будет показана в почтовом клиенте)
**form_title**    - Заголовок (в шапке письма)
**form_redirect** - Редирект на другую страницу после отправки
**form_template** - Шаблон письма


Callback для формы:
------
```
// для simpleMailer
var simpleMailer = {};
simpleMailer.test = function(){
  alert("Simple Mailer Callback!");
};
```