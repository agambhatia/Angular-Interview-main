# Angular Interview

For the code challenge, you are required to design and implement a web application that can display a preview of data in the form of tiles.

The application must obtain data from a server via a REST interface and allow users to view the data of the tiles in its entirety and delete the tile and associated data on the server.

Additionally, the web application must be capable of filtering data i.e. include a control feature that allows searching for a specific data property (tag) and displays only that subset of data.

Please adhere to the following guidelines for the assessment:

- To complete the programming task, use the API provided at the specified URL.
- You may utilize other frameworks and packages for the development of the web app.
- Use appropriate quality assurance measures.
- Implement a sensible layout with appropriate controls to ensure an effective and user-friendly experience for the user.
- Ensure that the layout fits to different screensizes.
- Keep the design of the web application simple and straightforward.

Develop this app as if you would do, when working in a team and follow best practices and conventions to the best of your knowledge during the development process.
While not all features may work perfectly, it is important to provide a comprehensible approach and be able to justify your decisions as there is no definitive right or wrong solution.

In case of any queries or uncertainties, please do not hesitate to get in touch with us.

## Frontend

The project uses Angular 18.
A clean Angular project is already included.

Run it with `npm start` or `ng serve`.

## Backend

This project uses [JSON Server](https://www.npmjs.com/package/json-server), to provide a simple REST API on [localhost:3000](https://localhost:3000).

The server provides a single route `/documents`.
It is also possible to request filtered data from the server with `/documents?key=value`.

Run it with `npm run server` in a separate terminal window.

Note: If a delete operation is performed, the data is deleted from the `db.json` file.

To restore the initial state copy the data from `db-reference.json`.

## Data

A document has a title (movie title), a summary (lorem ipsum), text (lorem ipsum), a date (dd/mm/yyyy) and tags (movie genres).

There are 50 documents overall.

Do not modify the data manually, other than restoring it after delete operations.
