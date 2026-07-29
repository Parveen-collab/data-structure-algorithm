// Handling Collision/Data Loss

class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key) {
    let total = 0

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }

    return total % this.size
  }

  set(key, value) {
    const index = this.hash(key)

    // Get the bucket at the hashed index
    const bucket = this.table[index]

    if (!bucket) {
      // No bucket exists, create one and add the key-value pair
      this.table[index] = [[key, value]]
    } else {
      // Check if the key already exists
      const sameKeyItem = bucket.find(item => item[0] === key)

      if (sameKeyItem) {
        // Update the existing value
        sameKeyItem[1] = value
      } else {
        // Add a new key-value pair
        bucket.push([key, value])
      }
    }
  }

  get(key) {
    const index = this.hash(key)

    const bucket = this.table[index]

    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key)

      if (sameKeyItem) {
        return sameKeyItem[1]
      }
    }

    return undefined
  }

  remove(key) {
    const index = this.hash(key)

    const bucket = this.table[index]

    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key)

      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1)
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i])
      }
    }
  }
}

const table = new HashTable(50)

table.set("name", "Bruce")
table.set("age", 25)

table.display()

console.log(table.get("name"))

table.set("name", "Clark")

table.remove("name")

table.display()