
function retrievePage() {
    const token: string | null = PropertiesService.getScriptProperties().getProperty("API_TOKEN");
    const pageId: string = "d63e6b65133e424b80e67fd37d96a89b";
    const apiUrl: string = "https://api.notion.com/v1/blocks/" + pageId + "/children";

    const options  = {
        "method": "GET",
        "headers": {
            "Content-type": "application/json",
            "Authorization": "Bearer " + token,
            "Notion-Version": "2022-06-28",
        },
    };

    const response = UrlFetchApp.fetch(apiUrl, options);
    const content = JSON.parse(response);
    console.log(content.results);
}
