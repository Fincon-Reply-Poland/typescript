# TypeScript Exercises
Ten zestaw zadań ma na celu sprawdzenie Twojej znajomości:
* typowania w TypeScript
* pracy z union types
* korzystania z wbudowanych Utility Types
* pisania bezpiecznego, restrykcyjnego kodu
---
## Zadanie 1 – Uzupełnij typ `User`
### Opis
Masz funkcję `getUser`, która zwraca obiekt użytkownika.

Twoim zadaniem jest:
zastąpić `any` poprawnym typem `User`
dopasować typ do struktury obiektu
odpowiednio otypować pole `role`
---
### Wskazówki

* Nie używaj `any`
Zwróć uwagę na:
* typy prymitywne (`string`, `boolean`)
* ograniczenie wartości `role` (nie powinien być zwykłym stringiem)
* Spróbuj użyć union types
---
### Kryteria poprawności
Kod powinien:
* kompilować się bez błędów
* nie używać `any`
* poprawnie wspierać `testUser()`
---
## Zadanie 2 – Utility Types
### Opis
Na podstawie typu:
```ts
type MyUser = {
  name: string,
  lastname: string,
  active?: boolean,
  email?: string
}
```
utwórz nowy typ:
```ts
type ActiveUser = ???;
```
---
### Cel
Zdefiniuj `ActiveUser` tak, aby:
* użytkownik był aktywny (`active`)
* posiadał email
* typ był oparty na `MyUser` (nie kopiuj całej definicji ręcznie)
---
### Wskazówki
Skorzystaj z:
* `Pick`
* `Required`
* lub innych Utility Types

Możesz też użyć:
intersection types (`&`)

Zadbaj o to, aby typ był precyzyjny

---
### Kryteria poprawności
Funkcja:
```ts
function getEmailIfActive(user: ActiveUser): string
```
powinna:
* działać bez błędów typów
* nie wymagać dodatkowych sprawdzeń typu `email !== undefined`

### Oddanie zadania
Po rozwiązaniu ćwiczenia:
```
git add .
git commit -m "Solve Typescript exercises"
git push
```

Podobnie jak poprzednim razem, testy uruchomią się automatycznie w GitHub Classroom.

---
Powodzenia 💪