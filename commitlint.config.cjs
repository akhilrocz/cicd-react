module.exports ={
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-min-length': [2, 'always', 10],
        'header-max-length': [2, 'always', 72],
    },
    plugins: [
        {
            rules:{
                'header-case-start-capital': ({raw}) => {
                    return [/^[A-Z]/.test(raw),
                    'Commit message must start with capital letter'
                    ];
                },
                'header-case-end-period': ({header}) => {
                    return [!/\.$/.test(header),
                    'Commit message must end with period'
                    ];
                }
            }
        }
    ]
}