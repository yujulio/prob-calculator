const holder = {
  statusHit: 0,
  baseSkill: 0,
  statusResist: 0,
  probability: 0
}

const selectElement = document.querySelector('form');

selectElement.addEventListener('keyup', (event) => {
  switch (event.target.id) {
  case 'status-hit':
    holder.statusHit = event.target.value
    break;
  case 'skill-prob':
      holder.baseSkill = event.target.value
    break;
  case 'status-hit-resist':
      holder.statusResist = event.target.value
    break;
  }

  calculate()
});

function calculate() {
  if (holder.statusHit && holder.baseSkill && holder.statusResist) {
    holder.probability = (1 + holder.statusHit / 100) / (1 + holder.statusResist / 100) * holder.baseSkill;

    document.getElementById('probability').value = holder.probability
    document.getElementById('estimated').value = holder.probability >= 100 ? '< 100' : holder.probability
  }
}