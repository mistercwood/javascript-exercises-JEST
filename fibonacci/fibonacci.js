const fibonacci = function(member) {
    const sequence = [0, 1];
    if (member < 0) {
        return "OOPS"
    }
    else {
      for (let i = 1; i < member; i++) {
        let newMember = parseInt(sequence[sequence.length - 2]) + parseInt(sequence[sequence.length - 1]);
        sequence.push(newMember);
        }
    return sequence[sequence.length - 1];
    }
};

module.exports = fibonacci;
