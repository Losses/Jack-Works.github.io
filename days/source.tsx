/// <reference path="./global.d.ts" />
declare const Material: typeof window.Material
declare const Data: IData
declare const hitokoto: string[][]
declare function getHitokoto(): string[]
const { Typography } = Material
const { Card, CardContent, CardActions, CardHeader, CardMedia } = Material
const { Table, TableBody, TableCell, TableHead, TableRow } = Material

//#region Styles

const Flex = () => <span style={{ flex: 1 }} />
const Magrin = () => <div style={{ marginTop: 24 }} />
const theme = Material.createMuiTheme({
    palette: {
        type: 'dark',
        primary: Material.colors.teal,
    },
    typography: {
        fontFamily: `'Noto Sans CJK SC Light', 'Microsoft Yahei Light', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    },
})

//#endregion

//#region Page
const Markdown: React.SFC<React.HtmlHTMLAttributes<HTMLSpanElement>> = ({ children, ...props }) => {
    return typeof children === 'string' ? (
        <span {...props} className="null" dangerouslySetInnerHTML={{ __html: marked(children) }} />
    ) : (
        <span {...props} children={children} />
    )
}
class TheCard extends React.Component<{
    captionTitle?: string
    reference?: string
    progress?: {
        max?: number
        current: number
    }
    content?: ICard['content']
}> {
    render() {
        return (
            <Card style={{ flex: 1 }}>
                <CardContent>
                    <Typography variant="caption">
                        <Markdown>{this.MakeCaption}</Markdown>
                    </Typography>
                    <Typography variant="headline" component="h2">
                        <Markdown>{this.MakeBody}</Markdown>
                    </Typography>
                    {this.props.reference && (
                        <Typography align="right">
                            ⸺<Markdown style={{ marginLeft: 6 }}>{this.props.reference}</Markdown>
                        </Typography>
                    )}
                </CardContent>
                {this.MakeProgress}
            </Card>
        )
    }
    get MakeProgress() {
        if (!this.props.progress) return null
        const p = this.props.progress
        return <Material.LinearProgress variant="determinate" value={(p.current / (p.max || 100)) * 100} />
    }
    get MakeCaption() {
        const progress = this.props.progress
        const caption = this.props.captionTitle
        const body = this.props.content
        const MakeProgressText = (x: typeof progress) => {
            if (!x) return ''
            if (!x.max) return x.current + ' %'
            return `${x.current} of ${x.max}`
        }
        if (!body) {
            return MakeProgressText(progress)
        } else {
            if (caption) return caption + (progress ? ' ⸺ ' + MakeProgressText(progress) : '')
            else return MakeProgressText(progress)
        }
    }
    get MakeBody() {
        const child = this.props.content || this.props.children || this.props.captionTitle
        if (!child) return null
        if (typeof child === 'string') {
            const result = []
            for (const t of child.split('\n')) {
                result.push(t, <br key={t} />)
            }
            return result
        }
        if (Array.isArray(child)) {
            // List
            return null
        }
        if ((((x: any) => x.head && x.body) as (x: any) => x is ITable)(child)) {
            // Table
            const { head, body } = child
            return (
                <Table>
                    <TableHead>
                        <TableRow>
                            {head.map((x, i) => (
                                <TableCell key={i}>
                                    <Markdown>{x}</Markdown>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {body.map((line, n) => (
                            <TableRow key={n}>
                                {line.map((row, j) => (
                                    <TableCell key={j} numeric={typeof row === 'number'}>
                                        <Markdown>{row}</Markdown>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )
        }
        return child
    }
}
class Page extends React.Component {
    get MakeTitle() {
        return (
            <div style={{ display: 'flex' }}>
                <Typography variant="display1" style={{ color: 'white' }}>
                    {Data.title}
                </Typography>
                <Flex />
                <Typography variant="subheading" style={{ alignSelf: 'flex-end' }}>
                    ⸺{Data.weekMessage}
                </Typography>
            </div>
        )
    }
    get MakeFooter() {
        return (
            <div style={{ display: 'flex' }}>
                <Flex />
                <Typography variant="subheading">⸺{Data.motto}</Typography>
            </div>
        )
    }
    get Hitokoto() {
        let [text, by, link] = getHitokoto()
        text = text.replace(
            new RegExp(
                `
        `,
                'g',
            ),
            '\n',
        )
        let using = false
        const result = text.split('\n').map(x => {
            const text = x.match(/(?<original>.+) \/ (?<translated>.+)/)
            if (text) {
                using = true
                return (
                    <>
                        <ruby>
                            <span lang="jp">{text.groups!.original}</span>
                            <rp> / </rp>
                            <rt>
                                <div>{text.groups!.translated}</div>
                            </rt>
                        </ruby>
                        <br />
                    </>
                )
            }
            return x
        })
        if (!using) return <TheCard captionTitle="Hitokoto" content={text} reference={by} />
        return (
            <TheCard captionTitle="Hitokoto" reference={by}>
                <>{result}</>
            </TheCard>
        )
    }
    state = { playing: false }
    get Media() {
        return null
    }
    render() {
        return (
            <Material.MuiThemeProvider theme={theme}>
                {this.MakeTitle}
                <Magrin />
                <div style={{ display: 'flex' }}>
                    {this.Hitokoto}
                    {this.Media}
                </div>
                <Magrin />
                {Data.data.map((datum, i) => {
                    return (
                        <React.Fragment key={i}>
                            <TheCard
                                captionTitle={datum.title}
                                reference={datum.reference}
                                content={datum.content}
                                progress={datum.progress}
                            />
                            <Magrin />
                        </React.Fragment>
                    )
                })}
                {this.MakeFooter}
            </Material.MuiThemeProvider>
        )
    }
}

//#endregion

ReactDOM.render(<Page />, document.querySelector('.container'))
