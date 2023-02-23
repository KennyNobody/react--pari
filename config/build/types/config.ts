export type BuildMode = 'development' | 'production';
export type AnalysisMode = 'server' | 'disabled';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number,
    analysis: AnalysisMode
}

export interface BuildOptions {
    analysis: AnalysisMode
    mode: BuildMode,
    isDev: boolean,
    port: number
    paths: BuildPaths,
}
