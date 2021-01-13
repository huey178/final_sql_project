# Server

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
nodemon
```

## Config file must be completed with your credentials from Microsoft SQL Server Management Studio before Database will connect ##

--- Management studio can be found at https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15 
--- Once installed, launch the management studio, and attempt to connect to the sql database. You will be Prompted to log in with your credentials which is what you will use to connect to the database within the app.js file.
--- Once you are signed in you will need to write a query to create the database you will be using (The name of the database that you create is what you will use in app.js).
--- Then create a table with the statements below.
CREATE TABLE [dbo].[FGTransaction](
[Seq] [bigint] IDENTITY(1,1) NOT NULL,
[Warehouse] [varchar](50) NOT NULL,
[ModelNo] [varchar](50) NOT NULL,
[SN] [varchar](50) NOT NULL,
[Quantity] [int] NOT NULL, --positive means in stock; negative means out of stock
[TrnTime] [datetime] NOT NULL, --transaction happening timestamp
CONSTRAINT [PK_FGTransaction_1] PRIMARY KEY CLUSTERED
(
[Seq] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY =
OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[FGTransaction] ADD CONSTRAINT [DF_FGTransaction_TrnTime]
DEFAULT (getdate()) FOR [TrnTime]
GO

Once these steps have been complete you should be able to type run nodemon in the terminal within the server folder without in problems.
