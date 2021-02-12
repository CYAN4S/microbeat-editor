class Note {
  line: number;
  beat: number;

  constructor(line: number, beat: number) {
    this.line = line;
    this.beat = beat;
  }
}

class LongNote extends Note {
  length: number;
  constructor(line: number, beat: number, length: number) {
    super(line, beat);
    this.length = length;
  }
}

export {Note, LongNote};
