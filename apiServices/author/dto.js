
const single = (resource) => ({
    id: resource._id,
    name: resource.name,
    email: resource.email,
});

const multiple = (resource) => resource.map((resource) => single(resource));

module.exports = {
    single,
    multiple
}