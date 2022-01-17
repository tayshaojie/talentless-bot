



// Fribbels gearscore Calculator
// Score = Attack %                     atk%
// + Defense %                          def%
// + Hp %                               hp%
// + Effectiveness                      eff
// + Effect Resistance                  res
// + Speed * (8/4)                      spd
// + Crit Damage * (8/7)                cdmg
// + Crit Chance * (8/5)                crit
// + Flat Attack * 3.46 / 39            atk
// + Flat Defense * 4.99 / 31           def
// + Flat Hp * 3.09 / 174               hp


function gearScore(...args) {
        args.forEach(arg => console.log(arg))
}


gearScore("spd, atk, hp, def")

