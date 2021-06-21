<h1 align='center'>
  top.gg Shields
</h1>
<p align='center'>
  Shields plugin/wrapper for top.gg bots. Generates a <a href='https://shields.io'>Shield Badge</a> for the availability of the bot on <a href='https://top.gg'>top.gg</a>
</p>

## Build and Run 🚀
Simply build using `npm` or `yarn`. Make sure to clone **.env.sample -> .env** and setup the [.env](.env.sample) as such:
- `PORT`: Port that will host the express app

Then run the following:
```sh
npm run build
npm run start
```

## Usage/Endpoints 😼
The ip and port are relative to where the API is hosted. API Endpoints are as follows:
- `GET`: **/badge/:id**
  - `Params`:
    - `id`: The bot ID obtained from top.gg
  - `Response`:
    - SVG Data for the badge routed from [Shields.io](https://shields.io)

## License 📔
Licensed under the [MIT](LICENSE) License.
