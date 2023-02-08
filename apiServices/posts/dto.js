
const single = (resource) => ({
    id: resource.id,
    date: resource.date,
    title: resource.title,
    content: resource.content,
    Author: resource.author.name

    
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple
}