export default function RemoveDuplicates(x) {
    for (let i = 0; i < x.length; i++) {
      for (let j = i + 1; j < x.length; j++) {
        if (x[i].recipe._id === x[j].recipe._id) x.splice(j, 1);
      }
    }
    return x;
  }