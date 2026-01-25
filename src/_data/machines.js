const machines = require("./machines.json");


const allMachines = machines.flatMap(cat =>
  cat.machines.map(machine => ({
    ...machine,
    category_slug: cat.slug,
  }))
);

module.exports = {
  list: machines,
  byId: Object.fromEntries(allMachines.map(m => [m.machine_id, m])),
};
