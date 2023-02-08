
const single = (resource) => ({
    id: resource.id,
    date: resource.date,
    title: resource.title,
    Author: resource.author.name,
    content: resource.content    
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple
}