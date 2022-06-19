export enum Checker {BLACK, WHITE, NONE};
export namespace Checker {
    const opposites: Checker[] = [Checker.WHITE, Checker.BLACK, Checker.NONE];
    export function opposite(checker: Checker): Checker {
        return opposites.at(checker) as Checker;
    }
} 