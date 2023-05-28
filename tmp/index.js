import { Octokit } from octokit;
const octokit = new Octokit({
  auth: process.env.TOKEN
})
async function button(){
try{
  await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner:"brainuser5705",
    repo: "extract-spotify"
  });
  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID; issue.user.id});
  console.log(titleAndAuthor);

}catch(error){
  console.log('Error! Status: ${error.status}. Message: ${error.response.data.message}')
}
}