# ASP.NET Core, Angular, Flutter, TODO

## Back-end (ASP.NET Core)

<p align="center">
    <img src="print1.png" alt="drawing" width="900"/>
</p>

## Front-end (Angular)

<p align="center">
    <img src="print2.png" alt="drawing" width="900"/>
</p>

## Mobile (Flutter)

### EF Core Migrations

-   Install: dotnet tool install --global dotnet-ef
-   Create: dotnet ef migrations add "migration-name" --startup-project ../Todo.Domain.Api/
-   Update: dotnet ef database update --startup-project ../Todo.Domain.Api/
