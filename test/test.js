var empty = require('../index.js')

describe('Single empty object', function () {
    it('object', function () {
        expect(true).toEqual(empty.all({}))
    })
    it('array', function () {
        expect(true).toEqual(empty.all([]))
    })
    it('string', function () {
        expect(true).toEqual(empty.all(''))
    })
    it('number', function () {
        expect(false).toEqual(empty.all(0))
    })
    it('boolean', function () {
        expect(false).toEqual(empty.all(false))
    })
    it('null', function () {
        expect(true).toEqual(empty.all(null))
    })
    it('undefined', function () {
        var tmp
        expect(true).toEqual(empty.all(tmp))
    })
})

describe('Single empty object', function () {
    it('object', function () {
        expect(true).toEqual(empty.some({}))
    })
    it('array', function () {
        expect(true).toEqual(empty.some([]))
    })
    it('string', function () {
        expect(true).toEqual(empty.some(''))
    })
    it('number', function () {
        expect(false).toEqual(empty.some(0))
    })
    it('boolean', function () {
        expect(false).toEqual(empty.some(false))
    })
    it('null', function () {
        expect(true).toEqual(empty.some(null))
    })
    it('undefined', function () {
        var tmp
        expect(true).toEqual(empty.some(tmp))
    })
})

describe('All objects in an object are empty.', function () {
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: {},
            bar: 0
        }))
    })
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: [],
            bar: 'bar'
        }))
    })
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: '',
            bar: true
        }))
    })
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: {},
            bar: [0]
        }))
    })
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: null,
            bar: 'bar'
        }))
    })
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: undefined,
            bar: ['bar']
        }))
    })
});

describe('Some objects in an object are empty.', function () {
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: {},
            bar: 0
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: [],
            bar: 'bar'
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: '',
            bar: true
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: {},
            bar: [0]
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: null,
            bar: 'bar'
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: undefined,
            bar: ['bar']
        }))
    })
});

describe('Some objects in an object are empty.', function () {
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: {},
            bar: {
                baz: [0]
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: '',
            bar: {
                baz: false
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: [],
            bar: {
                baz: []
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: {},
            bar: {
                baz: {}
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: null,
            bar: {
                baz: '0'
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: undefined,
            bar: {
                baz: [0]
            }
        }))
    })
});

describe('All objects in an object are empty.', function () {
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: {},
            bar: {
                baz: [0]
            }
        }))
    })
    it('array', function () {
        expect(false).toEqual(empty.all({
            foo: '',
            bar: {
                baz: false
            }
        }))
    })
    it('string', function () {
        expect(true).toEqual(empty.all({
            foo: [],
            bar: {
                baz: []
            }
        }))
    })
    it('number', function () {
        expect(true).toEqual(empty.all({
            foo: {},
            bar: {
                baz: {}
            }
        }))
    })
    it('boolean', function () {
        expect(false).toEqual(empty.all({
            foo: null,
            bar: {
                baz: '0'
            }
        }))
    })
    it('null', function () {
        expect(false).toEqual(empty.all({
            foo: undefined,
            bar: {
                baz: [0]
            }
        }))
    })
});

describe('All objects in a complex object are empty.', function () {
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: {
                bar: 1
            },
            bar: {
                baz: []
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.all({
            foo: {
                bar: ''
            },
            bar: {
                baz: []
            }
        }))
    })
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: ['1'],
            bar: {
                baz: []
            }
        }))
    })
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: {
                qux: 0
            },
            bar: {
                baz: {}
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.all({
            foo: null,
            bar: {
                baz: undefined
            }
        }))
    })
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: {},
            bar: {
                baz: {
                    qux: [0]
                }
            }
        }))
    })
    it('object', function () {
        expect(false).toEqual(empty.all({
            foo: '1',
            bar: {
                baz: {
                    qux: [0]
                }
            }
        }))
    })
});

describe('Some objects in a complex object are empty.', function () {
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: {
                bar: 1
            },
            bar: {
                baz: []
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: {
                bar: ''
            },
            bar: {
                baz: []
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: ['1'],
            bar: {
                baz: []
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: {
                qux: 0
            },
            bar: {
                baz: {}
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: null,
            bar: {
                baz: undefined
            }
        }))
    })
    it('object', function () {
        expect(true).toEqual(empty.some({
            foo: {},
            bar: {
                baz: {
                    qux: [0]
                }
            }
        }))
    })
    it('object', function () {
        expect(false).toEqual(empty.some({
            foo: '1',
            bar: {
                baz: {
                    qux: [0]
                }
            }
        }))
    })
});
