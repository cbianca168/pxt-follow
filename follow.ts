namespace follower {
  #enums
  let follower: Sprite = null;
  let target: Sprite = null;
  let followDistanc = 0;

  /**
    * Set the follower sprite
    */
  //% blockId = set_follower block = "set follower %sprite"
  //% weight=100 color=#492971
  export function setFollower(sprite: Sprite) {
    follower = sprite;
  }

  /**
    * Set the target sprite
    */
  //% blockId = set_target block = "set target %sprite"
  //% weight=90 color=#492971
  export function setTarget(sprite: Sprite) {
    target = sprite;
  }

  /**
    * Set the follow distance
    */
  //% blockId = set_distance block = "set follow distance %distance"
  //% weight=80 color=#492971
  export function setDistance(distance: number) {
    followDistance = distance;
  }
  
  /**
    * Update the follower position
    */
  //* blockId = update_follower block = "update follower"
  //% weight=70 color=#492971
  export function updateFollower() {
    if (follower && target) {
      let distance = Math.sqrt(Math.pow(follower.x - target.x, 2) + Math.pow(follower.y - target.y, 2));
      if (distance > followDistance) {
        let angle = Math.atan2(target.y - follower.y, target.x - follower.x);
        follower.vx = Math.cos(angle) * 50;
        follower.vy = Math.sin(angle) * 50;
      } else {
        follower.vx = 0;
        follower.vy = 0;
      }
    }
  }
}
